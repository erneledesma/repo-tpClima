import getData from '../utils/getData';

const Home = async () => {

    const resultado = await getData();
    console.log('resultado',resultado);


    const view =  `
        <div class="Clima">
        ${resultado.list.map(data => `
        <article class="Clima-item">
            <a href="#/${data.id}/">
            <h2> Temperatura: ${data.main.temp } Cº</h2>
            <p> Humedad: ${data.main.humidity } Km</p>
            <p> Viento: ${data.wind.speed } Km</p>
         
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}


export default Home;