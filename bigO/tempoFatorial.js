const fatorial = (n) => {
    if(n === 0){
      return 1;
    } 
    
    return n * fatorial(n-1);
  }
  
  console.log(fatorial(5)); //120