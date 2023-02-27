import React from "react";
import passwordTracker from '../../images/password-tracker.png';

const styles = {
    card: {
        width: '400px',
        height: '100px',
        flex: 'row'
    },
    container: {
      diplay: 'flex'
    },
    header: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      textDecoration: 'underline'
    }

}

export default function Portfolio() {
    return (
        <div>
        <h1 style={styles.header}> My Web Dev Portfolio</h1>
        <div style={styles.container} className='container'>
        <div className="container" style={styles.card}>
        <div class="col ">
          <div class="card project">
            <img  src={passwordTracker} alt='project' />
            <div class="card-body">
              <h5 class="card-title">Disney Character Locator</h5>
              <p class="card-text">A website/application which allows users to search for disney characters and access the searches later.</p>
              <a href="https://github.com/alexanderbarlow/disney-character-locator" class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://alexanderbarlow.github.io/disney-character-locator/" class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card project">
            <img  src={passwordTracker} alt='project' />
            <div class="card-body">
              <h5 class="card-title">Disney Character Locator</h5>
              <p class="card-text">A website/application which allows users to search for disney characters and access the searches later.</p>
              <a href="https://github.com/alexanderbarlow/disney-character-locator" class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://alexanderbarlow.github.io/disney-character-locator/" class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
          
        </div>
        <div class="col ">
          <div class="card project">
            <img  src={passwordTracker} alt='project' />
            <div class="card-body">
              <h5 class="card-title">Disney Character Locator</h5>
              <p class="card-text">A website/application which allows users to search for disney characters and access the searches later.</p>
              <a href="https://github.com/alexanderbarlow/disney-character-locator" class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://alexanderbarlow.github.io/disney-character-locator/" class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
          
        </div>
        
        </div>
        </div>
        </div>
    );
}