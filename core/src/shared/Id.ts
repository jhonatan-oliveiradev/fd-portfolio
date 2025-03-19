export default class Id {
  static generate(): string {
    const p1 = Math.random().toString(36).substring(2, 9).toLocaleUpperCase();
    const p2 = Math.random().toString(36).substring(2, 9).toLocaleUpperCase();
    const p3 = Math.random().toString(36).substring(2, 9).toLocaleUpperCase();

    return `${p1}-${p2}-${p3}`;
  }
}

console.log(Id.generate());
