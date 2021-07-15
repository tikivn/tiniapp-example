Page({
  data: {
    fixedHeader: false,
    items: Array.from(Array(100).keys())
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onTapCart() {
    console.log('onTapCart');
  }
});
