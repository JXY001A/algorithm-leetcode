 
export  function reverseWords(s: string): string {
  let chars = s.trim().split('').reverse();
  chars = removeExtraSpaces(chars);

  let slow = 0;
  for(let i=0;i<=chars.length;i+=1) {
    if(chars[i] === ' ' || i === chars.length) {
      reverse(slow,i-1,chars);
      slow=i+1;
    }
  }

  return chars.join('');
};

export const reverse = (start:number,end:number,chars:string[]) =>{
  while(start<end) {
    [chars[start],chars[end]] = [chars[end],chars[start]];
    end-=1;
    start+=1;
  }
}

export const removeExtraSpaces = (chars:string[])=>{
  let fast =  0;
  let slow =  0;
  for(let i=0;i<chars.length;i+=1) {
    if(chars[i] === ' ' && (i === 0 || chars[i-1] === ' ')) {
      fast+=1;
    }else {
      chars[slow++] = chars[fast++];
    }
  }
  chars.length = slow;
  return chars;
}

export default reverseWords;






























