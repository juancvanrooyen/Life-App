import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

function Home() {

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome, Friends!</h1>
            <p className="lead">This will be the Home Page for the Life App website, nifty ey?</p>
          </div>
        </div>

        <h2 style={{marginTop:"2rem"}} id="news">News</h2>
        <small>What's happened since the last version?</small>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Please Bring Your ID</h5>
              <p className="card-text">One of the most important steps for the App is implemented; Authentication. Not only does the App not allow access to certain parts without the User logging in, but it also filters out Tasks not made by said User. Have fun!</p>
            </div>
            <div className="card-footer">
              <p className="card-text"><small className="text-muted">9 June 2020</small></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project Boom!</h5>
              <p className="card-text">This thing has grown, a lot! Since the first version went live we have grown a new set of pages, some with functioning parts (yay!). Now that the important foundational steps are in place, we can start moving forward and building some more fun fun functionality!</p>
            </div>
            <div className="card-footer">
              <p className="card-text"><small className="text-muted">NaN</small></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Commitment Issues</h5>
              <p className="card-text">Had a little hiccup with Git Commits that got out of hand after the first version went live. Had to get rid of the many MANY "_finalFinalFINALOMGKILLME2" commits I'd made trying to get Heroku to accept my sacrifice. All good now though.</p>
            </div>
            <div className="card-footer">
              <p className="card-text"><small className="text-muted">29 May 2020</small></p>
            </div>
          </div>
        </div>

        <h2 style={{marginTop:"2rem"}}>Future Updates</h2>
        <small>What to look forward to...</small>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Finish off Tasks</h5>
              <p className="card-text">There are still a few behavioral things to iron out, refreshing is one of them. Another would be to replace the "Functionality Coming Soon" message with, you know, functionality.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Next!</h5>
              <p className="card-text">We need to start building the Dashboard and List elements next. New elements should be coming faster in future because of the fact that so much of the foundation is now here. Will it be **fast**? Probably not. Its better if you accept this now.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Roadmap V1</h5>
              <p className="card-text">Oh, you thought there wasn't a plan? Silly. I've drafted a Roadmap of how this project will hopefully progress. So far only the Tasks have been elaborated upon (not nearly enough though), but it is a start. I may publish a public-friendly version in future. We'll see.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
