import React from 'react';
import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';

function App() {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />} />
      {/* <Route exact path="/questions" render={() => <StackList dataQuestion={dataQuestion} handleInputValue={this.handleInputValue} searchWord={searchWord} createNewQuestion={this.createNewQuestion} resetFilter={this.resetFilter} />} />
      <Route exact path="/question/:id" render={routeProps => <QuestionDetails id={routeProps.match.params.id} dataQuestion={dataQuestion} updateQuestion={this.updateQuestionAnswer} />} />
      <Route exact path="/team" render={() => <TeamInfo />} /> */}
      <Redirect from="/" to="/home" />
    </Switch>
  );
}

export default App;
