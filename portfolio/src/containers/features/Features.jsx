import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
    {
        title: "React.js",
        text: "",
    },
    {
        title: "Node.js",
        text: "",
    },
    {
        title: "Pytorch",
        text: "",
    },
    {
        title: "Programming Languages",
        text: "Javascript, Python, C++, CUDA, Java",
    },
];

const Features = () => (
    <div className="port__features section__padding" id="features">
        <div className="port__features-heading">
            <h1 className="gradient__text">
                These are some of the technologies I am working with
            </h1>
        </div>
        <div className="port__features-container">
            {featuresData.map((item, index) => (
                <Feature
                    title={item.title}
                    text={item.text}
                    key={item.title + index}
                />
            ))}
        </div>
    </div>
);

export default Features;
