/**
 * DAO 객체의 추상화 레이어
 */
class DAO {
  constructor(target) {
    this.target = target;
  }

  get(id) {
    return this.target.find((item) => item.id === id);
  }

  add(item) {
    this.target.push(item);
  }

  remove(id) {
    const item = this.get(id);
    if (item) {
      this.target = this.target.filter((item) => item.id !== id);
    }
    return item;
  }

  update(id, item) {
    const index = this.target.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.target[index] = item;
    }
  }

  getList(condition = () => true, cursor = 0, count = 99999) {
    return this.target.filter(condition).slice(cursor, cursor + count);
  }
}

module.exports = DAO;
