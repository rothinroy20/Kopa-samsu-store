import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <h3>React Work</h3>
                <p>React is a declarative efficicnt and flexible javaScript library for building user interfaces. It lets you compose complex UIS from small and isolated picecs of code called "Components".React has a few different kinds of Components, but we'll start with React component .
                </p>
            </div>
            <div>
                <h3>Props VS stats different</h3>
                <p><b>Props</b></p>
                <p>
                    1.The Data is passed from one component to another. <br />
                    2.It is Immutable. <br />
                    3.Props can be used with stat and functional components. <br />
                    4.Props are read only.
                </p>
                <p><b>Stats</b></p>
                <p>
                    1.The Data is passed within the Component only. <br />
                    2.It is mutable. <br />
                    3.Stats can be used only with the state components. <br />
                    4.State is both read and write.
                </p>
            </div>
        </div>
    );
};

export default Footer;