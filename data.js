/* Все ссылки сохранены по последнему списку заказчика. */
const site = (name, url, note = '') => ({ name, url, note });
export const styles = [
  { id:'elegant', name:'Элегантный', mood:'Изящно и со вкусом', description:'Изящные надписи, свободное пространство и аккуратные детали. Сайт выглядит утончённо и спокойно – как бутик, где внимательно относятся к каждой мелочи.', sites:[
    site('Designs by Ahn','https://www.designsbyahn.com/shop'),site('Petals by Cam','https://www.petalsbycam.com/'),site('Kvitkafa','https://www.kvitkafa.com/?currency=EUR'),site('Moss Floral','https://www.mossfloralfw.com/'),site('Brian Kirkby Flowers','https://www.briankirkbyflowers.co.uk/bkf/store/') ] },
  { id:'art', name:'Арт-дизайн', mood:'С характером и фантазией', description:'Необычные сочетания, выразительные фотографии и смелая подача. Такой сайт удивляет и показывает магазин как творческое место с собственным взглядом.', sites:[
    site('Gypsy Floral','https://www.gypsyfloral.com/'),site('Foglia D’Oro','https://www.foglia-doro.com/our-collection'),site('The Unlikely Florist','https://theunlikelyflorist.com/'),site('Jordan Flowers & Events','https://www.jordanflowersandevents.com/'),site('Goshá','https://goshaflowers.com/products/fresh-flowers') ] },
  { id:'minimal', name:'Минимализм', mood:'Легко, спокойно, ничего лишнего', description:'Много свободного пространства, простые надписи и фотографии в центре внимания. Сайт создаёт ощущение порядка и аккуратности, помогает сосредоточиться на букетах.', sites:[
    site('Castor Fleuriste','https://castorfleuriste.com/'),site('Nectar Floral Designs','https://www.nectarfloraldesigns.com/'),site('FLWR Shop','https://flwrshop.com/'),site('The Botanist','https://botanist.co.nz/'),site('Ode à la Rose','https://www.odealarose.com/') ] },
  { id:'editorial', name:'Журнальный', mood:'Как страницы красивого журнала', description:'Крупные фотографии, заметные заголовки и истории, которые хочется рассматривать. Сайт передаёт насмотренность и индивидуальность магазина, оставляет впечатление продуманного дизайнерского бренда.', sites:[
    site('Gray Harper','https://grayharper.com/'),site('Moon Canyon','https://www.mooncanyondesign.com/'),site('Fleur','https://uicookies.com/demo/theme/fleur/','Демонстрация шаблона'),site('Katherine Seiggel Designs','https://katherineseiggel.com/'),site('Twig & Arrow','https://twigandarrow.com/') ] },
  { id:'classic', name:'Классический', mood:'Знакомо, понятно, надёжно', description:'Привычный каталог, понятные разделы и аккуратная подача товаров. Такой сайт вызывает доверие и создаёт образ надёжного магазина, где легко выбрать подарок.', sites:[
    site('Roland’s Florist','https://www.rolandsflorist.co.uk/'),site('Scotts Flowers NYC','https://www.scottsflowersnyc.com/'),site('FTD','https://www.ftd.com/'),site('French Florist','https://www.frenchflorist.com/'),site('Élan Flowers','https://www.elanflowers.com/') ] },
  { id:'romantic', name:'Романтический', mood:'Нежность в каждой детали', description:'Мягкие оттенки, деликатные украшения и фотографии с тёплым настроением. Сайт говорит о чувствах, заботе и особенных моментах – как приглашение выбрать подарок с любовью.', sites:[
    site('The Floral Society','https://thefloralsociety.com.au/'),site('Hare’s Garden','https://hares-garden.petal.marketing/','Пример на платформе Petal'),site('Mabel’s','https://mabels.petal.marketing/','Пример на платформе Petal'),site('Daydream Florals','https://www.daydreamflorals.com/'),site('Restoration Blooms','https://www.restorationbloomsfloral.com/') ] },
  { id:'natural', name:'Натуральный', mood:'Живо, тепло, естественно', description:'Природные оттенки, живые фотографии и ощущение ручной работы. Такой сайт напоминает уютную мастерскую и передаёт искренность, близость к природе и любовь к своему делу.', sites:[
    site('Oak & Olive Flowers','https://www.oakandoliveflowers.com/'),site('Lauren Hill Floral Studio','https://laurenhillfloralstudio.com/'),site('Wild Stems','https://wildstems.la/'),site('Snapdragon Edinburgh','https://snapdragonedinburgh.com/'),site('Jenn’s Sticks and Stems','https://www.jennssticksandstems.com/') ] },
  { id:'botanical', name:'Ботанический', mood:'Как маленький сад', description:'Зелёные оттенки, листья, растения и ботанические детали. Сайт создаёт ощущение свежести и спокойствия, показывает магазин как место, где знают и ценят мир растений.', sites:[
    site('Terra Bella Flowers','https://www.terrabellaflowers.com/'),site('Crimson Horticultural Rarities','https://crimsonhort.com/'),site('Plant Store','https://ru.wix.com/website-template/view/html/1995','Страница шаблона Wix'),site('The Sill','https://www.thesill.com/','Магазин растений'),site('The Flower Girl Florist','https://tfgflorist.wixsite.com/mysite') ] },
  { id:'premium', name:'Премиальный', mood:'Особенный и статусный', description:'Крупные выразительные фотографии, сдержанные детали и ощущение дорогой презентации. Сайт подчёркивает исключительность магазина и высокий уровень внимания к клиенту.', sites:[
    site('Scotts Flowers NYC','https://www.scottsflowersnyc.com/'),site('Moss Floral','https://www.mossfloralfw.com/'),site('Goshá','https://goshaflowers.com/'),site('Haute Floral','https://www.hautefloral.com/'),site('Flowers Vasette','https://flowersvasette.com.au/') ] },
  { id:'bright', name:'Яркий', mood:'Цвет, энергия, хорошее настроение', description:'Насыщенные цвета, заметные акценты и жизнерадостная подача. Сайт запоминается, передаёт открытость магазина и превращает выбор цветов в маленький праздник.', sites:[
    site('Native Poppy','https://www.nativepoppy.com/'),site('Props Floral Design','https://propsfloraldesign.com/'),site('Farmgirl Flowers','https://farmgirlflowers.com/'),site('Arena Flowers','https://www.arenaflowers.com/'),site('Aoyama Flower Market','https://aoyamaflowermarket.net/en') ] }
];

const option = (text, weights, reason) => ({ text, weights, reason:reason || text });
export const questions = [
  { title:'Представьте: ваш сайт – это помещение. Куда мы попали?', hint:'Выберите место, которое проще всего представить.', options:[
    option('В светлое просторное место, где всё аккуратно',{minimal:3,elegant:1,classic:1},'вам близки простор и аккуратность'),
    option('В уютную цветочную мастерскую',{natural:3,romantic:1,botanical:1},'вам хочется уюта цветочной мастерской'),
    option('В изящный бутик',{elegant:3,premium:2},'вам близка атмосфера изящного бутика'),
    option('В необычную творческую студию',{art:3,editorial:2},'вам нравится творческая атмосфера'),
    option('В яркое место, которое поднимает настроение',{bright:3,art:1},'вам хочется яркого настроения') ] },
  { title:'Какое первое впечатление должен производить магазин?', hint:'Что хотелось бы услышать от посетителя?', options:[
    option('«Здесь всё понятно, легко выбрать»',{classic:3,minimal:2},'вам важно, чтобы выбирать было легко'),
    option('«Как красиво и утончённо»',{elegant:3,editorial:1,premium:1},'вам нравится утончённая подача'),
    option('«Здесь тепло и душевно»',{natural:3,romantic:2},'вам важно ощущение тепла'),
    option('«Здесь особенные, дорогие вещи»',{premium:3,elegant:1},'вам хочется подчеркнуть особенность магазина'),
    option('«Как необычно! Хочется рассмотреть»',{art:3,editorial:2,bright:1},'вам хочется удивлять и вызывать интерес') ] },
  { title:'Как вы бы хотели представить свои букеты?', hint:'Представьте, что показываете их новому покупателю.', options:[
    option('Показать каждый, чтобы удобно сравнивать',{classic:3,minimal:3},'вам удобно сравнивать букеты по отдельности'),
    option('Показать, как они украшают дом или праздник',{romantic:3,natural:2,botanical:2},'вам хочется показать цветы в жизни'),
    option('Крупно показать несколько особенно красивых работ',{premium:3,art:2,elegant:2},'вам близка выразительная подача отдельных работ'),
    option('Рассказать историю про цветы и тех, кто их создаёт',{editorial:3,natural:1},'вам интересны истории о цветах и людях') ] },
  { title:'Какое настроение вам ближе?', hint:'Здесь нет правильного ответа – только ваше ощущение.', options:[
    option('Спокойствие и порядок',{minimal:3,classic:2,elegant:1},'вам близки спокойствие и порядок'),
    option('Нежность и романтика',{romantic:3,elegant:2},'вам близка нежная атмосфера'),
    option('Природа и свежесть',{botanical:3,natural:3},'вам хочется ощущения природы'),
    option('Праздник и энергия',{bright:3,art:1},'вам хочется энергии и праздника'),
    option('Торжественность и роскошь',{premium:3,classic:1},'вам близка торжественная подача') ] },
  { title:'Представьте упаковку вашего магазина. Какая она?', hint:'Выбирайте по ощущению, даже если у вас уже есть упаковка.', options:[
    option('Простая однотонная, с небольшой надписью',{minimal:3,classic:1},'вам нравятся простые детали'),
    option('Нежная, с лентой',{romantic:3,elegant:2},'вам нравятся нежные детали'),
    option('Из натуральной бумаги',{natural:3,botanical:1},'вам близки натуральные материалы'),
    option('Изысканная, как дорогой подарок',{premium:3,elegant:2,classic:1},'вам важна подарочная, изысканная подача'),
    option('Яркая и запоминающаяся',{bright:3,art:2},'вам нравится запоминающаяся подача'),
    option('С рисунками листьев и растений',{botanical:3,natural:1},'вам нравятся растительные детали') ] },
  { title:'Какой комплимент магазину приятнее всего?', hint:'Представьте, что это написал ваш покупатель.', options:[
    option('«У вас безупречный вкус»',{elegant:3,premium:2},'вам важно впечатление хорошего вкуса'),
    option('«У вас так уютно»',{natural:3,romantic:2},'вам важно, чтобы магазин был уютным'),
    option('«У вас всегда что-то необычное»',{art:3,bright:1},'вам хочется своего узнаваемого характера'),
    option('«Вам можно доверять»',{classic:3,minimal:2},'вам важно ощущение надёжности'),
    option('«У вас цветы как из настоящего сада»',{botanical:3,natural:2},'вам близок образ настоящего сада'),
    option('«У вас всё как в красивом журнале»',{editorial:3,premium:1},'вам нравится подача красивого журнала') ] },
  { title:'Насколько необычным вы хотите сделать сайт?', hint:'Можно выбрать спокойный вариант – он тоже будет вашим.', options:[
    option('Лучше привычно и понятно',{classic:3,minimal:2},'вам близка понятная подача'),
    option('Хочется немного своего характера',{elegant:3,romantic:2,natural:2,botanical:2},'вам хочется деликатной индивидуальности'),
    option('Хочется заметно отличаться',{editorial:3,premium:2,bright:2},'вам хочется заметно отличаться'),
    option('Готовы к смелому и неожиданному решению',{art:3,bright:2},'вам интересны смелые решения') ] },
  { title:'Есть ли что-то, чего точно не хочется?', hint:'Здесь можно выбрать несколько ответов.', multiple:true, options:[
    option('Слишком много всего',{art:-2,bright:-2,botanical:-1,romantic:-1}),
    option('Слишком пусто и строго',{minimal:-3}),
    option('Слишком нежно и «сладко»',{romantic:-3,elegant:-1}),
    option('Слишком ярко',{bright:-3,art:-1}),
    option('Слишком темно',{premium:-1}),
    option('Слишком необычно – непонятно, куда нажимать',{art:-3}),
    option('Ничего из этого не смущает',{}) ] },
  { title:'Что ещё вы хотели бы видеть на своём сайте?', hint:'Пожелание, идея, любимые цвета или то, чего точно не хочется. Можно просто пропустить.', free:true }
];

export const storageKey = 'floral-guide-v1';
export function getResult(answers) {
  const main=questions.slice(0,7);
  const valid=main.map((q,i)=>({q,a:answers[i]})).filter(({q,a})=>a?.values?.length===1 && Number.isInteger(a.values[0]) && q.options[a.values[0]]);
  if(valid.length<3) return {neutral:true, ranked:[], substantive:valid.length};
  const ranked=styles.map((s,index)=>{
    let score=0,max=0;
    for(const {q,a} of valid) {score+=q.options[a.values[0]].weights[s.id]||0;max+=Math.max(...q.options.map(o=>o.weights[s.id]||0));}
    const penalty=(answers[7]?.values||[]).filter(Number.isInteger).reduce((acc,v)=>acc+(questions[7].options[v]?.weights[s.id]||0),0);
    return {id:s.id,index,score:Math.max(0,score/(max||1)+penalty*0.035)};
  }).sort((a,b)=>b.score-a.score||a.index-b.index);
  if(ranked[0].score<0.25) return {neutral:true,ranked:[],substantive:valid.length};
  const best=ranked[0].score;
  const matches=ranked.filter(s=>best-s.score<=0.10).slice(0,3);
  return {neutral:false,ranked:matches,substantive:valid.length};
}

export function reasonsFor(id,answers) {
  return questions.slice(0,7).flatMap((q,i)=>{
    const a=answers[i]; if(a?.values?.length!==1 || !Number.isInteger(a.values[0])) return [];
    const o=q.options[a.values[0]]; return o?.weights[id]>=2 ? [o.reason] : [];
  }).slice(0,2);
}
