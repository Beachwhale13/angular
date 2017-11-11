export class Product {
  constructor(
        public id: number = Math.floor(Math.random() * 9999) + 1,
        public name: string = '',
        public price: number = 0,
        public imgUrl: string = null
    ) {}
}
