const pow2 =x =>x*x;
const deg2rad = deg => deg * Math.PI /180;

const init = (e, a, b) =>{
console.log('container: ', document.getElementById('container'));
console.log('Loaded in ', e.timeStamp , 'ms');
console.log(pow2(a));
console.log(deg2rad(b));

}

window.addEventListener('DOMContentLoaded', ev=>init(ev,5,90));