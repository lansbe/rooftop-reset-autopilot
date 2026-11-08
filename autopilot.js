(() => {
  'use strict';
  if (location.origin !== 'https://www.poteto.com' || typeof Tower !== 'object') throw new Error('Open Rooftop Reset at https://www.poteto.com/ first.');
  if (globalThis.rooftopAutopilot?.running) throw new Error('Autopilot already running.');
  const sequence=[[9,1],[1,17],[13,1],[17,29],[81,1],[17,11],[18,11],[5,1],[1,14],[65,1],[1,4],[9,1],[1,3],[0,12],[1,2],[2,10],[18,5],[5,1],[17,15],[25,1],[17,1],[81,1],[17,26],[16,9],[14,1],[0,15],[2,21],[66,1],[2,12],[18,3],[16,2],[6,1],[2,15],[10,1],[2,5],[0,12],[66,1],[2,16],[18,1],[17,2],[10,1],[2,17],[6,1],[18,18],[82,1],[18,5],[17,6],[18,6],[13,1],[1,3],[0,12],[1,20],[65,1],[1,9],[2,3],[1,1],[17,5],[13,1],[1,1],[0,15],[1,18],[65,1],[1,12],[16,3],[18,3],[5,1],[1,16],[65,1],[1,6],[9,1],[1,2],[0,21],[1,3],[17,3],[12,1],[0,37],[64,1],[0,18],[12,1],[0,38],[64,1],[0,14],[16,1],[0,1],[12,1],[0,35],[64,1],[0,16],[16,1],[0,1],[4,1],[16,9],[24,1],[16,28],[80,1],[16,16],[12,1],[0,35],[64,1],[0,14],[16,6],[4,1],[0,15],[8,1],[0,19],[64,1],[0,23],[16,63],[4,1],[0,18],[64,1],[0,11],[16,6],[12,1],[0,38],[64,1],[0,11],[16,4],[0,1],[4,1],[0,11],[8,1],[0,29],[64,1],[0,12],[16,9],[0,1],[4,1],[0,18],[8,1],[0,21],[64,1],[0,10],[16,11],[12,1],[0,37],[64,1],[0,1],[16,8],[0,12],[4,1],[0,23],[64,1],[0,3],[8,1],[0,23],[16,12],[4,1],[0,20],[8,1],[0,17],[64,1],[0,12],[16,3],[0,1],[12,1],[0,35],[64,1],[0,14],[16,3],[4,1],[0,19],[8,1],[0,13],[64,1],[0,15],[16,4],[0,3],[12,1],[0,37],[64,1],[0,10],[16,7],[12,1],[0,37],[64,1],[0,7],[16,8],[4,1],[0,1],[4,1],[0,17],[64,1],[0,5],[8,1],[0,26],[16,3],[0,2],[4,1],[0,19],[8,1],[0,19],[64,1],[0,11],[16,4],[0,1],[32,1]];
  const route={sequence,ticks:1647,axisWindows:[[505,147,-1],[652,1,-0.9902163465995597],[653,1,-0.946253092006384],[654,1,-0.90228983741321],[655,1,-0.8583265828200327],[656,1,-0.8143633282268595],[657,1,-0.7704000736336861],[658,1,-0.7264368190405106],[659,1,-0.6824735644473338],[660,1,-0.6385103098541576],[661,1,-0.5945470552609823],[662,1,-0.5505838006678064],[663,1,-0.5066205460746306],[664,1,-0.46265729148145474],[665,1,-0.41869403688827883],[666,1,-0.374730782295103],[667,1,-0.33076752770192713],[668,1,-0.28680427310875123],[669,1,-0.2428410185155754],[670,1,-0.19887776392239956],[671,1,-0.1549145093292237],[672,1,-0.11095125473604786],[673,1,-0.06698800014287211],[674,1,-0.023024745549696253],[675,1,0.020938509043479596],[676,1,0.06490176363665545],[677,1,0.1088650182298313],[678,1,0.15282827282300715],[679,1,0.196791527416183],[680,1,0.24075478200935882],[681,1,0.2847180366025347],[682,1,0.32868129119571055],[683,226,1],[909,1,0.5164041994750656],[910,1,0.5603674540682414],[911,1,0.6043307086614172],[912,1,0.648293963254593],[913,1,0.6922572178477688],[914,1,0.7362204724409447],[915,1,0.7771451431031173],[916,1,0.8211083976962932],[917,1,0.865071652289469],[918,1,0.9090349068826448],[919,1,0.9120734908136484],[920,1,0.9560367454068242],[921,14,1],[935,1,0.9560367454068242],[936,1,0.9120734908136484],[937,1,0.9560367454068242],[938,8,1],[946,161,-1],[1107,1,-0.9987449025435949],[1108,1,-0.9547816479504191],[1109,1,-0.9108183933572433],[1110,1,-0.9547816479504191],[1111,1,-0.9987449025435949],[1112,18,-1],[1130,28,1],[1158,1,0.9560367454068242],[1159,50,1],[1209,1,0.9731160104976385],[1210,100,1],[1310,129,-1],[1439,1,-0.9402887139107612],[1440,1,-0.8963254593175853],[1441,1,-0.8523622047244096],[1442,1,-0.8083989501312338],[1443,1,-0.7644356955380579],[1444,1,-0.7204724409448822],[1445,1,-0.6765091863517063],[1446,1,-0.6325459317585305],[1447,1,-0.5885826771653546],[1448,1,-0.5446194225721789],[1449,1,-0.500656167979003],[1450,1,-0.4566929133858271],[1451,1,-0.4127296587926512],[1452,1,-0.3687664041994754],[1453,1,-0.32480314960629947],[1454,1,-0.2808398950131236],[1455,1,-0.23687664041994777],[1456,1,-0.19291338582677192],[1457,1,-0.1506896790847827],[1458,1,-0.19465293367795855],[1459,1,-0.23861618827113917],[1460,1,-0.2825794428643198],[1461,1,-0.3265426974574951],[1462,1,-0.3705059520506677],[1463,1,-0.4144692066438425],[1464,1,-0.4584324612370222],[1465,1,-0.502395715830196],[1466,1,-0.5463589704233713],[1467,1,-0.5903222250165466],[1468,1,-0.6342854796097224],[1469,1,-0.6782487342028982],[1470,1,-0.7222119887960741],[1471,1,-0.7661752433892499],[1472,1,-0.8101384979824257],[1473,1,-0.7661752433892499],[1474,1,-0.8101384979824257],[1475,1,-0.8541017525756015],[1476,1,-0.8980650071687774],[1477,169,1]]};
  const original=Tower.update;
  const controls=(function compileRoute(route) {
  if (!Array.isArray(route.sequence) || !Number.isSafeInteger(route.ticks) || route.ticks < 1) throw Error('Invalid route');
  let total = 0;
  for (const entry of route.sequence) {
    if (!Array.isArray(entry) || entry.length !== 2) throw Error('Invalid sequence entry');
    const [mask, n] = entry;
    if (!Number.isInteger(mask) || mask < 0 || mask > 127 || (mask & 3) === 3 || !Number.isSafeInteger(n) || n < 1) throw Error('Invalid control');
    total += n;
    if (!Number.isSafeInteger(total) || total > route.ticks) throw Error('Sequence exceeds declared duration');
  }
  if (total !== route.ticks) throw Error('Sequence duration mismatch');
  const masks = new Uint8Array(total), axes = new Float64Array(total);
  let start = 0;
  for (const [mask, n] of route.sequence) {
    masks.fill(mask, start, start + n);
    axes.fill(mask & 1 ? 1 : mask & 2 ? -1 : 0, start, start + n);
    start += n;
  }
  const windows = route.axisWindows ?? [];
  if (!Array.isArray(windows)) throw Error('Invalid analog windows');
  let end = 0;
  for (const entry of windows) {
    if (!Array.isArray(entry) || entry.length !== 3) throw Error('Invalid analog window');
    const [first, n, axis] = entry;
    if (!Number.isSafeInteger(first) || !Number.isSafeInteger(n) || first < end || n < 1 || first + n > total || !Number.isFinite(axis) || axis < -1 || axis > 1) throw Error('Invalid analog window');
    end = first + n;
    axes.fill(axis, first, end);
  }
  function at(tick) {
    if (!Number.isInteger(tick) || tick < 0 || tick >= total) throw Error('Control index outside route');
    const mask = masks[tick];
    return {axis: axes[tick], jump: !!(mask & 4), dash: !!(mask & 8), down: !!(mask & 16), interact: !!(mask & 32), cut: !!(mask & 64)};
  }
  return {ticks: total, masks, axes, at};
})(route);
  const verification=Tower.newRun('nightmare');
  for(let tick=0;tick<controls.ticks;tick++) {
    if(verification.won||verification.dead||verification.deaths) throw new Error('Route ends before its declared duration. Nothing was started.');
    original(verification,controls.at(tick),Tower.step);
    verification.events.length=0;
  }
  if(!verification.won || verification.deaths!==0) throw new Error('The loaded game differs from the verified route. Nothing was started.');
  const button=[...document.querySelectorAll('#start-choices [data-difficulty="nightmare"], #dialog-choices [data-difficulty="nightmare"]')].find(el=>el.getClientRects().length);
  if(!button) throw new Error('Open Choose a climb before running this script.');
  let finish;
  const status={running:true,ticks:0,segment:0,error:null,result:null,done:new Promise(resolve=>{finish=resolve;})};
  globalThis.rooftopAutopilot=status;
  let run=null,remaining=sequence[0][1];
  function stop(error=null) {
    Tower.update=original;
    status.running=false;
    status.error=error;
    status.result={won:!!run?.won,deaths:run?.deaths??0,time:run?.time??0,ticks:status.ticks,error};
    finish(status.result);
  }
  status.cancel=()=>stop('Cancelled');
  Tower.update=function(state,userInput,dt=Tower.step) {
    if(!run) {
      if(state.difficulty!=='nightmare'||state.time!==0){stop('Expected a fresh Nightmare run');return original(state,userInput,dt);}
      run=state;
    }
    if(state!==run || status.segment>=sequence.length){stop('Unexpected game state');return original(state,userInput,dt);}
    if(dt!==Tower.step){stop('Unexpected simulation step');return original(state,userInput,dt);}
    original(state,controls.at(status.ticks),dt);
    status.ticks++;
    if(--remaining===0){status.segment++;remaining=sequence[status.segment]?.[1]??0;}
    if(state.dead || state.deaths!==0)stop('A collision interrupted the route');
    else if(state.won)stop();
    else if(status.segment===sequence.length)stop('Route ended before victory');
  };
  button.click();
  return 'Autopilot started; completion is available in rooftopAutopilot.done.';
})()
