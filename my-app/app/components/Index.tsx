// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Index.module.css';

const Index: React.FC = () => {
    return (
        <div>
            <section className={styles.iotSolutions}>
                <h1>IoT Solutions & Intelligent Connectivity</h1>
                <p>...설명...</p>
                <Image src="/iot1.png" alt="IoT Solutions" width={500} height={300} />
            </section>

            <section className={styles.productIntroduction}>
                <h2>IoT 제품들 소개</h2>
                <div className={styles.product}>
                    <Image src="/iot2.png" alt="Product Name" width={500} height={300} />
                    <p>제품 설명...</p>
                </div>
            </section>

            <section className={styles.contactUs}>
                <h2>Contact Us</h2>
                <address>

                </address>
            </section>
        </div>
    );
};

export default Index;
