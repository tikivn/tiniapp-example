Page({
  data: {
    fixedHeader: false,
    items: Array.from(Array(100).keys())
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onLoad() {
    // console.log(getCurrentPages()[0].setData({ text: 1 }));
    console.log('this.data.items :>> ', this.data.items);
    my.getSystemInfo({
      success: res => {
        console.log('res :>> ', res);
      }
    })
  },
  onTapCart() {
    console.log('onTapCart');
  }
});
