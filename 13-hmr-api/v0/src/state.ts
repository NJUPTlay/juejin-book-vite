let timer: number | undefined

if (import.meta.hot) {
  //模块销毁时的逻辑，代表在模块更新、旧模块需要销毁时需要做的一些事
  //需要在不同的模块实例之间共享一些数据 
  if (!import.meta.hot.data.count) {
    import.meta.hot.data.count = 0
    console.log('123');
  }
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  })
}


export function initState() {
  // const getInitCount = () => {
  //   const data = import.meta.hot?.data || { count: 0 }
  //   return data.count
  // }
  // let count = getInitCount();
  // timer = setInterval(() => {
  //   let countEle = document.getElementById('count');
  //   countEle!.innerText = ++count + '';
  // }, 1000);
  const getAndIncCount = () => {
    const data = import.meta.hot?.data || {
      count: 0
    };
    data.count = data.count + 1;
    return data.count;
  };
  //@ts-ignore
  timer = setInterval(() => {
    let countEle = document.getElementById('count');
    countEle!.innerText = getAndIncCount() + '';
  }, 1000);
}
