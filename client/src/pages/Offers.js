import React from 'react';
import CardListOffers from '../components/offers/CardListOffers';
import CommentArea from '../components/offers/CommentArea';
import ListGroupFavorite from '../components/offers/ListGroupFavorite';

const Offers = () => {
    return (
        <div className="container">
            <h3>Tableau de bord</h3>
            <div className="offers d-flex flex-row">
                <div className="left-part col-lg-8">
                    partie gauche
                    <div className="offer-form">formulaire d'offre</div>
                    <div className="card-list-offer">
                        <CardListOffers />
                    </div>
                </div>
                <div className="rigth-part col-lg-4">
                    partie droite
                <div className="comment">
                        <CommentArea />
                </div>
                    <div className="offer-list">
                        <ListGroupFavorite />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;