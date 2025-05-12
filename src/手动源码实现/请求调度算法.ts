

class Scheduler {
  private queue: Array<{ task: () => Promise<void>; resolve: () => void }> = []; // 等待队列
  private activeCount: number = 0; // 当前运行任务数

  async add(promiseFunc: () => Promise<void>): Promise<void> {
    return new Promise((resolve) => {
      // 将任务和 resolve 封装成统一结构
      const wrappedTask = { task: promiseFunc, resolve };

      // 判断是否立即执行
      if (this.activeCount < 2) {
        this.runTask(wrappedTask);
      } else {
        this.queue.push(wrappedTask);
      }
    });
  }

  private async runTask(wrappedTask: {
    task: () => Promise<void>;
    resolve: () => void;
  }) {
    this.activeCount++; // 增加并发计数
    try {
      await wrappedTask.task(); // 执行异步任务
      wrappedTask.resolve(); // 触发外层 Promise 的 resolve
    } finally {
      this.activeCount--; // 完成时减少计数
      this.checkQueue(); // 检查并执行下一个任务
    }
  }

  private checkQueue() {
    if (this.queue.length > 0 && this.activeCount < 2) {
      const nextTask = this.queue.shift()!;
      this.runTask(nextTask);
    }
  }
}



// 题目要求：实现 scheduler.add 方法，同时运行的任务数不超过 2 个，打印入下代码逻辑：
// 测试用例
const scheduler = new Scheduler();
const timeout = (time: number) => new Promise<void>((r) => setTimeout(r, time));

const addTask = (time: number, order: number) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

// 输出顺序：2 3 1 4
