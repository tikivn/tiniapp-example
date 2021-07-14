Page({
  data: {
    fixedHeader: false,
    items: Array.from(Array(100).keys())
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 147 });
  },
  onLoad() {
    console.log('this.data.items :>> ', this.data.items);
    my.getSystemInfo({
      success: res => {
        console.log('res :>> ', res);
      }
    })
  }
});
