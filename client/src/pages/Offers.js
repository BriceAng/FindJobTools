import React from 'react';
import CardListOffers from '../components/offers/CardListOffers';
import CommentArea from '../components/offers/CommentArea';

const Offers = () => {
    return (
        <div>
            <h3>Tableau de bord</h3>
            <div className="offers bg-success d-flex flex-row">
                <div className="left-part col-lg-8">
                    partie gauche
                    <div className="offer-form">formulaire d'offre</div>
                    <div className="card-list-offer bg-primary">
                        <CardListOffers />
                    </div>
                </div>
                <div className="rigth-part">
                    partie droite
                <div className="comment">
                        <CommentArea />
                </div>
                    <div className="offer-list">liste des offres favorite</div>
                </div>
            </div>
        </div>
    );
};

export default Offers;