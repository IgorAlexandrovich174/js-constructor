import image from './assets/image.png'
import {TextBlock, ImageBlock, TitleBlock, ColumnsBlock} from './classes/blocks'

const text = `<a href="https://github.com/IgorAlexandrovich174" target="_blank">Ссылка на репозиторий</a> `

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles : {
            background: 'linear-gradient(to right, #25239e, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles : {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'С соблюдением принципов SOLID и ООП в JavaScript',
        'JavaScript- это просто, интересно.',
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #979799, #25239e)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #979799, #4b4a69)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
]