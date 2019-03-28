// 装饰器demo
@AddAbility('fly')
class SuperMan { }

function AddAbility(ability) {
  return function(target) {
    target[ability] = true;
    return target;
  }
}

console.log(SuperMan['fly']);
