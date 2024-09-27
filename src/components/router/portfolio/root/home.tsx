import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div
            className="mt-32 mb-16 mx-auto max-w-screen-lg text-center font-bold text-4xl md:text-5xl lg:text-6xl"
            id="home"
        >
            <h1 className="text-foreground">
                Привет! Я{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                    FullStack
                </span>{' '}
                разработчик, создающий современные веб-приложения.
            </h1>
            <span className="mt-5 text-lg text-muted-foreground max-w-screen-md block mx-auto">
                На данный момент я учусь в{' '}
                <Link to="https://innopolis.university/" target="_blank">
                    Университете Иннополис
                </Link>{' '}
                на 3ем курсе и работаю Frontend разработчиком там же, в{' '}
                <Link
                    to="https://engineerschool.innopolis.university/"
                    target="_blank"
                >
                    Передовой Инженерной Школе
                </Link>
                .
            </span>
        </div>
    );
}
