import getData from '../utils/getData';


const Header = async () => {
    const resultado = await getData();
    console.log('resultado',resultado);

    
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1 />
                    <a href="/">
                   Aplicación del Clima
                   <h2>${resultado.city.name}</h2>
                    </a>  
                </h1>
            </div>

           
        </div>
      
        </a>

    </div>
    `
    return view;
};

export default Header;