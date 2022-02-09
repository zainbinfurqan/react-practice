import React, { useEffect } from 'react';
import './style.css'

function Dump(props) {

    return (
        <div>
            <div class="card">
                <div class="card__front card__part">
                    <img class="card__front-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" />
                    <p class="card_numer">**** **** **** 6258</p>
                    <div class="card__space-75">
                        <span class="card__label">Card holder</span>
                        <p class="card__info">John Doe</p>
                    </div>
                    <div class="card__space-25">
                        <span class="card__label">Expires</span>
                        <p class="card__info">10/25</p>
                    </div>
                </div>
                <div class="card__back card__part">
                    <div class="card__black-line"></div>
                    <div class="card__back-content">
                        <div class="card__secret">
                            <p class="card__secret--last">420</p>
                        </div>
                        <img class="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dump;