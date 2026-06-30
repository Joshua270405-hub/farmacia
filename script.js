const products = [{"name": "Paracetamol 500 mg", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 85, "old": 95, "img": "assets/paracetamol.png", "badge": "Oferta", "rating": 5.0}, {"name": "Loratadina 10 mg", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 145, "old": 188, "img": "assets/loratadina.png", "badge": "Popular", "rating": 4.9}, {"name": "Antiácido Masticable", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 180, "old": 201, "img": "assets/antiacido.png", "badge": "Oferta", "rating": 4.5}, {"name": "Ibuprofeno 400 mg", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 210, "old": 235, "img": "assets/ibuprofeno.png", "badge": "Popular", "rating": 4.7}, {"name": "Acetaminofén 650 mg", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 195, "old": 237, "img": "assets/acetaminofen.png", "badge": "Popular", "rating": 4.7}, {"name": "Jarabe tos Adultos", "cat": "Medicamentos OTC", "desc": "Producto de venta libre para necesidades comunes del hogar.", "price": 265, "old": 344, "img": "assets/jarabe.png", "badge": "Popular", "rating": 4.9}, {"name": "Vitamina C 1000 mg", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 320, "old": 390, "img": "assets/vitamina-c.png", "badge": "", "rating": 4.8}, {"name": "Multi Vitaminas", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 590, "old": 767, "img": "assets/multivitaminico.png", "badge": "Popular", "rating": 4.9}, {"name": "Omega 3 Softgels", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 760, "old": 896, "img": "assets/omega3.png", "badge": "Top", "rating": 4.6}, {"name": "Zinc 50 mg", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 420, "old": 470, "img": "assets/zinc.png", "badge": "Top", "rating": 4.7}, {"name": "Magnesio 400 mg", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 510, "old": 663, "img": "assets/magnesio.png", "badge": "Popular", "rating": 4.9}, {"name": "Colágeno Beauty", "cat": "Vitaminas", "desc": "Suplemento para apoyar el bienestar diario.", "price": 850, "old": 1105, "img": "assets/colageno.png", "badge": "", "rating": 4.7}, {"name": "SPF 50 Solar", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 695, "old": 847, "img": "assets/protector.png", "badge": "Top", "rating": 4.8}, {"name": "Shampoo Dermatológico", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 520, "old": 582, "img": "assets/shampoo.png", "badge": "", "rating": 4.8}, {"name": "Crema Hidratante", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 430, "old": 507, "img": "assets/crema.png", "badge": "", "rating": 4.8}, {"name": "Baby Toallitas", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 250, "old": 305, "img": "assets/toallitas.png", "badge": "", "rating": 4.6}, {"name": "Pañales Bebé", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 780, "old": 951, "img": "assets/panales.png", "badge": "Nuevo", "rating": 4.9}, {"name": "Gel Antibacterial", "cat": "Cuidado Personal", "desc": "Producto de cuidado personal para uso diario.", "price": 185, "old": 207, "img": "assets/gel.png", "badge": "", "rating": 4.5}, {"name": "120/80 Digital", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 2850, "old": 3705, "img": "assets/tensiometro.png", "badge": "Top", "rating": 4.8}, {"name": "GLU Monitor", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 1950, "old": 2379, "img": "assets/glucometro.png", "badge": "Popular", "rating": 4.9}, {"name": "Nebulizador Portátil", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 2450, "old": 2989, "img": "assets/nebulizador.png", "badge": "Oferta", "rating": 4.5}, {"name": "Botiquín Familiar", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 1200, "old": 1464, "img": "assets/botiquin.png", "badge": "Top", "rating": 4.9}, {"name": "36.5° Digital", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 395, "old": 513, "img": "assets/termometro.png", "badge": "Popular", "rating": 4.6}, {"name": "SpO2 Oxímetro", "cat": "Equipos Médicos", "desc": "Equipo médico básico para control en casa.", "price": 1150, "old": 1357, "img": "assets/oximetro.png", "badge": "", "rating": 4.7}];
let cart=[];

window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),650));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible') });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function render(list=products){
  const grid=document.getElementById('productGrid');
  grid.innerHTML='';
  list.forEach(p=>{
    const i=products.indexOf(p);
    grid.innerHTML += `<article class="product-card reveal visible">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
      <img src="${p.img}" alt="${p.name}">
      <small>${p.cat}</small>
      <h3>${p.name}</h3>
      <div class="stars">★★★★★ <span>${p.rating}</span></div>
      <p>${p.desc}</p>
      <div class="price-row">
        <div class="price"><b>RD${p.price.toLocaleString()}</b><br><del>RD${p.old.toLocaleString()}</del></div>
        <button onclick="addToCart(${i})">Agregar</button>
      </div>
    </article>`;
  });
}

function addToCart(i){
  const found=cart.find(x=>x.name===products[i].name);
  if(found) found.qty++;
  else cart.push({...products[i], qty:1});
  updateCart();
  document.getElementById('cartPanel').classList.add('open');
  toast('Producto agregado al carrito');
}

function updateCart(){
  document.getElementById('cartCount').textContent=cart.reduce((s,p)=>s+p.qty,0);
  const sub=cart.reduce((s,p)=>s+p.price*p.qty,0);
  const tax=Math.round(sub*.18);
  document.getElementById('subtotal').textContent=sub.toLocaleString();
  document.getElementById('tax').textContent=tax.toLocaleString();
  document.getElementById('total').textContent=(sub+tax).toLocaleString();
  document.getElementById('cartItems').innerHTML = cart.length ? cart.map((p,i)=>`
    <div class="cart-item">
      <img src="${p.img}">
      <div><b>${p.name}</b><br><small>${p.qty} x RD${p.price.toLocaleString()}</small></div>
      <button onclick="removeItem(${i})">Quitar</button>
    </div>`).join('') : '<p style="padding:20px">Carrito vacío.</p>';
}

function removeItem(i){ cart.splice(i,1); updateCart(); }
function toggleCart(){ document.getElementById('cartPanel').classList.toggle('open'); }
function filterProducts(c){ render(c==='Todos'?products:products.filter(p=>p.cat===c)); document.getElementById('productos').scrollIntoView({behavior:'smooth'}); }
function searchProducts(){ const t=document.getElementById('searchInput').value.toLowerCase(); render(products.filter(p=>(p.name+p.cat+p.desc).toLowerCase().includes(t))); }
function checkout(){ toast(cart.length?'Compra demo finalizada':'Agrega productos primero'); }
function sendForm(e){ e.preventDefault(); toast('Consulta enviada'); e.target.reset(); }
function openLogin(){ document.getElementById('loginModal').classList.toggle('show'); }
function trackOrder(){ toast('Pedido demo: preparación → despacho → entrega'); }
function toggleTheme(){ document.body.classList.toggle('dark'); }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
render(); updateCart();
