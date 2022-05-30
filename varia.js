let dead = [];      //концовки смрети
let deadGlobal = '\n\nПосле этого кошмара Сандро проснулся в своей кровати дома. Он так и не понял, к чему это было, где он был, и что с ним произошло... Он так и не сможет заслужить доверие Господа, а значит все случилось намного ужасней, чем могло быть… Жена Сандро погибла в тот самый день от ножевого ранения, она смогла прогнать последнего грабителя, но сама не смогла выжить…\n\n';

let end = [];       //концовки прохождения
 end[0] = '*ХОРОШАЯ КОНЦОВКА*';
 end[1] = '*СРЕДНЯЯ КОНЦОВКА*';
 end[2] = '*ПЛОХАЯ КОНЦОВКА*';

let bog = [];       //приговор
let message = [];   //слова бога
    message[0] = '...';
    message[1] = '...';
let death = 0;      //счетчик смертей
let result = 0;     //счетчик результат

let razgovor1 = '';     //Диалоги с мальчиком
let razgovor1_2 = '';
let razgovor1_3 = 'e';


module.exports.dead = dead;
module.exports.deadGlobal = deadGlobal;
module.exports.end = end;
module.exports.bog = bog;
module.exports.message = message;
module.exports.death = death;
module.exports.result = result;
module.exports.razgovor1 = razgovor1;
module.exports.razgovor1_2 = razgovor1_2;
module.exports.razgovor1_3 = razgovor1_3;