import 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import { backgroundColors } from '../utils';

function Charts({ data, dataTypes }) {

    const barOptions = { plugins: { legend: { display: false } } }
    const { socialMedia, rangesOfAge } = dataTypes;
    const { averageAge, averageTime, socialMediaInfo } = data;

    const timeInSocialMedia = {
        labels: socialMedia,
        datasets: [
            {
                data: socialMedia.map(ele => averageTime[ele]),
                backgroundColor: backgroundColors,
            },
        ],
    }

    const favoriteSocialMedia = {
        labels: socialMedia,
        datasets: [
            {
                data: socialMedia.map(ele => socialMediaInfo[ele]),
                backgroundColor: backgroundColors,
            },
        ],
    }

    const agesSocialMedia = {
        labels: rangesOfAge,
        datasets: averageAge.map((ele, index) => ({
            label: ele.socialMedia,
            data: ele.averageAge,
            backgroundColor: backgroundColors[index],
        }))
    }

    return (
        <div className='row justify-content-center'>
            <div className='card col-md-10 text-center py-2 px-3'>
                <span className='h2 text-primary'>
                    Estadísticas Recolectadas
                </span>
                <p>
                    Hemos logrado recibir con éxito un numero total de
                    <span className='text-primary fw-bold'> {data.quantity} encuestas </span>
                    llenadas por nuestros usuarios.
                </p>
            </div>
            <div className='row justify-content-center gap-4 mt-4 px-3'>
                <div className='card col-md-5 text-center p-2'>
                    <span className='h3 fw-normal mb-3'>
                        Horas en Redes Sociales
                    </span>
                    <Bar data={timeInSocialMedia} options={barOptions} />
                </div>
                <div className='card col-md-5 text-center p-2'>
                    <span className='h3 fw-normal mb-3'>
                        Mejor Red Social
                    </span>
                    <Bar data={favoriteSocialMedia} options={barOptions} />
                </div>
                <div className='card col-md-7 text-center p-2 mb-5'>
                    <span className='h3 fw-normal mb-3'>
                        Edades en Redes Sociales
                    </span>
                    <Bar data={agesSocialMedia} />
                </div>
            </div>
        </div>
    );
}

export default Charts;