import {FC} from 'react';
import cl from './style/NewsPageBlock.module.scss'
import { NewsBlockType } from '@/types/NewsPageBlock';
import Image from 'next/image';
import im from '@/images/Снимок экрана (300).png'

const NewsPageBlock: FC<NewsBlockType> = ({BlockImage,BlockText}) => {
    return ( 
        <div className={cl.NewsPageBlock} >
            <Image src={im}  alt='Картинка секции'/>
            <div>
                <p className={cl.BlockText}>{BlockText}</p>
            </div>
        </div>
    );
}

export default NewsPageBlock