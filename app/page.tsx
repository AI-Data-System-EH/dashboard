"use client";

import Card from "@/components/common/card";
import Spline from "@splinetool/react-spline";

export default function App() {
    return (
        <>
            {/* Header */}
            <div
                className="z-10 w-full
                    px-5 xl:px-0
                    max-w-xl md:max-w-3xl
                    "
            >
                {/* Main Content */}
                <h1
                    className="animate-fade-up bg-gradient-to-br
                            from-matte-black to-stone-500
                            dark:from-off-white dark:to-zinc-500
                            bg-clip-text text-center text-transparent
                            opacity-0 drop-shadow-md
                            font-display font-bold
                            text-5xl md:text-7xl
                            leading-[3.5rem] md:leading-[5rem]
                            tracking-[-0.02em] [text-wrap:balance]
                            "
                    style={{
                        animationDelay: "0.15s",
                        animationFillMode: "forwards",
                    }}
                >
                    IoT Solutions & Intelligent Connectivity
                </h1>
                {/* Description */}
                <p
                    className="mt-6 animate-fade-up text-center
                            text-zinc-500 dark:text-zinc-400
                            opacity-0 [text-wrap:balance] md:text-xl"
                    style={{
                        animationDelay: "0.25s",
                        animationFillMode: "forwards",
                    }}
                >
                    주식회사 흰산은 IoT 솔루션과 지능형 연결성을 제공합니다.
                </p>
            </div>

            {/* Cards */}
            <div
                className="
                    grid grid-cols-1 md:grid-cols-2
                    w-full max-w-screen-xl
                    my-10 gap-5 px-5 xl:px-0
                    animate-fade-up
                    "
            >
                {/* <Spline scene="https://prod.spline.design/3C0HlLvhHP4MqBoy/scene.splinecode" /> */}
                {features.map(({ title, description, demo, large }) => (
                    <Card
                        key={title}
                        title={title}
                        description={description}
                        demo={demo}
                        large={large}
                    />
                ))}
            </div>
        </>
    );
}

// cspell:words WMIOT
const features = [
    {
        title: "IoT 게이트웨이 \n 소규모대기배출관리시스템 (WMIOT-G01)",
        description: `"""
            loT Gateway WMIOT-G01은 미려한 디자인의 고급 IoT 게이트웨이 제품으로,
            다양한 센서 연결이 가능하며, 고사양 ADC를 사용하여 정밀한 데이터측정을 지원합니다.
            또한, 고급형 센서를 사용하여 정확한 데이터 수집을 가능케 하여 다양한 응용 분야에서 사용가능한 IoT 제품입니다.
        `,
        large: false,
        demo: <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />,
    },
    {
        title: "aaaa",
        description: "aa",
        large: false,
        demo: <Spline scene="https://prod.spline.design/BrwYzn53yHpHrKgc/scene.splinecode" />,
    },
];
