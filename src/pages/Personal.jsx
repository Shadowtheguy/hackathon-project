import { useState } from "react";
import opinion from "../data/opinion.json";

function Personal() {
  //* Use States
  const [alphonsoGoodSongsDisplay, setAlphonsoGoodSongsDisplay] = useState([]);
  const [dylanGoodSongsDisplay, setDylanGoodSongsDisplay] = useState([]);

  const [alphonsoBadSongsDisplay, setAlphonsoBadSongsDisplay] = useState([]);
  const [dylanBadSongsDisplay, setDylanBadSongsDisplay] = useState([]);

  //* Variable Setup
  let AlphonsoFavoritesTitles = [];
  let AlphonsoFavoritesArtists = [];

  let DylanFavoritesTitles = [];
  let DylanFavoritesArtists = [];

  let AlphonsoDislikesTitles = [];
  let AlphonsoDislikesArtists = [];

  let DylanDislikesTitles = [];
  let DylanDislikesArtists = [];

  //* Set Up Lists
  for (let i = 0; i < 20; i++) {
    if (opinion[i].person === "Alphonso" && opinion[i].Opinion === "Good") {
      AlphonsoFavoritesTitles.push(opinion[i]["Track Name"]);
      AlphonsoFavoritesArtists.push(opinion[i].Artist);
    }

    if (opinion[i].person === "Dylan" && opinion[i].Opinion === "Good") {
      DylanFavoritesTitles.push(opinion[i]["Track Name"]);
      DylanFavoritesArtists.push(opinion[i].Artist);
    }
  }

  for (let i = 0; i < 20; i++) {
    if (opinion[i].person === "Alphonso" && opinion[i].Opinion === "Bad") {
      AlphonsoDislikesTitles.push(opinion[i]["Track Name"]);
      AlphonsoDislikesArtists.push(opinion[i].Artist);
    }

    if (opinion[i].person === "Dylan" && opinion[i].Opinion === "Bad") {
      DylanDislikesTitles.push(opinion[i]["Track Name"]);
      DylanDislikesArtists.push(opinion[i].Artist);
    }
  }

  //* On Events
  function createGoodLists() {
    const goodListAlphonso = [];
    const goodListDylan = [];

    for (let i = 0; i < 5; i++) {
      goodListAlphonso.push(
        <>
          <li>
            {AlphonsoFavoritesTitles[i]} - {AlphonsoFavoritesArtists[i]}
          </li>
        </>
      );
    }

    setAlphonsoGoodSongsDisplay(goodListAlphonso);
  }

  function createBadLists() {}

  //* Actual Page
  return (
    <>
      <section>
        <h2 className="text-center m-2">Personal favorites and dislikes</h2>
        <p className="text-center m-4">
          Alphonso and Dylan decided to hand select the songs they like and
          dislike just incase you cared to know their opinion on the top 50
        </p>
      </section>

      <section className="container">
        <div className="row">
          <div className="d-grid col-6">
            <h2 className="text-center ">Songs that are good</h2>
            <button
              className="btn btn-success m-1 d-grid"
              onClick={createGoodLists}
            >
              Good
            </button>
            <div className="row">
              <div className="col-3">
                <h4 className="text-center">Alphonso</h4>
                <ol>{alphonsoGoodSongsDisplay}</ol>
              </div>
              <div className="col-3">
                <h4 className="text-center">Dylan</h4>
              </div>
            </div>
          </div>
          <div className="d-grid col-6">
            <h2 className="text-center ">Songs that are terrible</h2>
            <button
              className="btn btn-danger m-1 d-grid"
              onClick={createBadLists}
            >
              Terrible
            </button>
            <div className="row">
              <div className="col-3">
                <h4 className="text-center">Alphonso</h4>
              </div>
              <div className="col-3">
                <h4 className="text-center">Dylan</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Personal;
