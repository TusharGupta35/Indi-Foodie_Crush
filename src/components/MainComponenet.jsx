import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Recipe from './RecipeComponent';
import Feedback from './FeedbackComponent';
import RecipeDetail from './RecipeDetail';

import { RECIPES } from '../shared/recipe'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: RECIPES
        };
    }


    render() {

        const RecipeWithId = ({ match }) => {
            return (
                <RecipeDetail
                    recipe={this.state.recipes.filter((recipe) => recipe.id === parseInt(match.params.recipeId, 10))[0]}
                />
            );
        };

        return (
            <div className='bg-color'>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home recipes={this.state.recipes} />} />
                    <Route exact path='/Recipes' component={() => <Recipe recipes={this.state.recipes}/>} />
                    <Route path='/menu/:recipeId' component={RecipeWithId} />
                    <Route exact path='/aboutus' component={() => <About />} />
                    <Route exact path='/feedback' component={() => <Feedback />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(Main);