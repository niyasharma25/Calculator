const state = {
  current:   '0',   
  previous:  '',    
  operator:  null,  
  justEvaled: false 
};
const resultEl    = document.getElementById('result');
const expressionEl = document.getElementById('expression');
const opBtns      = document.querySelectorAll('.btn-op');

function render() {
  resultEl.textContent = state.current;

  const len = state.current.replace('-', '').length;
  resultEl.classList.remove('small', 'xsmall', 'error');
  if (len > 12) resultEl.classList.add('xsmall');
  else if (len > 8) resultEl.classList.add('small');

  opBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.val === state.operator && !state.justEvaled);
  });
}

function setExpression(str) {
  expressionEl.textContent = str;
}

function inputNumber(val) {
  if (state.justEvaled) {
    state.current   = val;
    state.previous  = '';
    state.operator  = null;
    state.justEvaled = false;
  } else if (state.current === '0') {
    state.current = val;
  } else if (state.current.length < 12) {
    state.current += val;
  }
  render();
}

function inputDecimal() {
  if (state.justEvaled) { state.current = '0.'; state.justEvaled = false; render(); return; }
  if (!state.current.includes('.')) state.current += '.';
  render();
}

function inputOperator(op) {
  if (state.operator && !state.justEvaled) evaluate();
  state.previous  = state.current;
  state.operator  = op;
  state.justEvaled = false;
  setExpression(formatNum(state.previous) + ' ' + opSymbol(op));
  state.current = '0';
  render();
}

function evaluate() {
  if (!state.operator || state.previous === '') return;
  const a = parseFloat(state.previous);
  const b = parseFloat(state.current);
  let res;
  if (state.operator === '/' && b === 0) {
    resultEl.classList.add('error');
    resultEl.textContent = 'Error';
    setExpression('');
    Object.assign(state, { current: '0', previous: '', operator: null, justEvaled: true });
    return;
  }
  switch (state.operator) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = a / b; break;
  }
  setExpression(formatNum(a) + ' ' + opSymbol(state.operator) + ' ' + formatNum(b) + ' =');
  res = parseFloat(res.toPrecision(12));
  state.current   = String(res);
  state.previous  = '';
  state.operator  = null;
  state.justEvaled = true;
  render();
}

function clear() {
  Object.assign(state, { current: '0', previous: '', operator: null, justEvaled: false });
  setExpression('');
  render();
}

function toggleSign() {
  if (state.current === '0') return;
  state.current = state.current.startsWith('-')
    ? state.current.slice(1)
    : '-' + state.current;
  render();
}

function percent() {
  state.current = String(parseFloat(state.current) / 100);
  render();
}

function formatNum(n) {
  const num = parseFloat(n);
  return isNaN(num) ? n : String(parseFloat(num.toPrecision(10)));
}
function opSymbol(op) {
  return { '+': '+', '-': '−', '*': '×', '/': '÷' }[op] || op;
}

document.querySelector('.grid').addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const { action, val } = btn.dataset;
  switch (action) {
    case 'number':   inputNumber(val);   break;
    case 'decimal':  inputDecimal();     break;
    case 'operator': inputOperator(val); break;
    case 'equals':   evaluate();         break;
    case 'clear':    clear();            break;
    case 'sign':     toggleSign();       break;
    case 'percent':  percent();          break;
  }
});

document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9')   inputNumber(e.key);
  else if (e.key === '.')              inputDecimal();
  else if (['+','-','*','/'].includes(e.key)) inputOperator(e.key);
  else if (e.key === 'Enter' || e.key === '=') evaluate();
  else if (e.key === 'Escape')         clear();
  else if (e.key === 'Backspace') {
    if (state.current.length > 1) state.current = state.current.slice(0,-1);
    else state.current = '0';
    render();
  }
});
render();
