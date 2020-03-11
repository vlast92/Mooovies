import renderer from 'react-test-renderer';
import React from "react";

import MovieCardFull from "./MovieCardFull";
import {MemoryRouter, Route, Switch} from "react-router-dom";

test("MovieCardFull renders correctly", () => {

    const dummyMovieInfo = {
        Year: "2002",
        Released: "22 Mar 2002",
        Country: "Germany, USA",
        Genre: "Action, Horror, Sci-Fi, Thriller",
        Runtime: "117 min",
        Production: "New Line Cinema",
        Director: "Guillermo del Toro",
        Writer: "Marv Wolfman (character), Gene Colan (character), David S. Goyer",
        Actors: "Wesley Snipes, Kris Kristofferson, Ron Perlman, Leonor Varela",
        Awards: "6 wins & 10 nominations.",
        Ratings: [
            {Source: "Internet Movie Database", Value: "6.7/10"},
            {Source: "Rotten Tomatoes", Value: "57%"},
            {Source: "Metacritic", Value: "52/100"}
        ],
        Poster: "https://m.media-amazon.com/images/M/MV5BOWVjZTIzNDYtNTBlNC00NTJjLTkzOTEtOTE0MjlhYzI2YTcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Plot: "A rare mutation has occurred within the vampire community. The Reaper. A vampire so consumed with an insatiable bloodlust that they prey on vampires as well as humans, transforming victims who are unlucky enough to survive into Reapers themselves. Now their quickly expanding population threatens the existence of vampires, and soon there won't be enough humans in the world to satisfy their bloodlust. Blade, Whistler (Yes, he's back) and an armory expert named Scud are curiously summoned by the Shadow Council. The council reluctantly admits that they are in a dire situation and they require Blade's assistance. Blade then tenuously enters into an alliance with The Bloodpack, an elite team of vampires trained in all modes of combat to defeat the Reaper threat. Blade's team and the Bloodpack are the only line of defense which can prevent the Reaper population from wiping out the vampire and human populations."
    };
    const onMakingSearchRequest = jest.fn();

    const tree = renderer
        .create(
            <MemoryRouter initialEntries={['/tt0187738']}>
                <Switch>
                    <Route path="/:imdbID">
                        <MovieCardFull
                            movieInfo={dummyMovieInfo}
                            movieLoading={false}
                            onMakingGetMovieRequest={onMakingSearchRequest}
                        />
                    </Route>
                </Switch>
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});