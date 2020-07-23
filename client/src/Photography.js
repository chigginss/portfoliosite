import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class Photography extends Component {

  render() {
    return (
          <Router>
            <div className=''>
              <nav className='routes'>
                  <div className='route'><Link className='link' to="/photography/">EXPERIENCE</Link></div>
                  <div className='route'><Link className='link' to="/photography/creative">Creative</Link></div>
                  <div className='route'><Link className='link' to="/photography/portraits">People</Link></div>
                  <div className='route'><Link className='link' to="/photography/nature">Nature</Link></div>
                  <div className='route'><Link className='link' to="/photography/landscape">Landscape</Link></div>
                  <div className='route'><Link className='link' to="/photography/travel">Travel</Link></div>
                  <div className='route'><Link className='link' to="/photography/events">Event</Link></div>
              </nav>
              <Switch>
              <Route path="/photography/">
                  <Experience />
                </Route>
                <Route path="/photography/nature">
                  <Nature />
                </Route>
                <Route path="/photography/landscape">
                  <Landscape />
                </Route>
                <Route path="/photography/travel">
                  <Travel />
                </Route>
                <Route path="/photography/portraits">
                  <Portraits />
                </Route>
                <Route path="/photography/creative">
                  <Creative />
                </Route>
                <Route path="/photography/events">
                  <Event />
                </Route>
              </Switch>
            </div>
          </Router>
    );
  }
}

function getPortraitImages() {
  const people_image_names = [
    'terra_snow_portrait',
    'olivia_portrait',
    'terra_portrait',
    'luke_portrait',
    'maria_portrait',
    'olivia_and_maria_eclipse',
    'joji_emerald_pool',
    'joji_portrait',
    'glacier_portrait',
    'ghana_kids_celebrating',
    'ghana_woman_dancing',
    'emily_portrait',
    'anya_nepal',
    'aidan_portrait',
    'ursula_stairs_wordstock',
    'logan_emerald_pool',
    'mussori_kid_view',
    'stephen_soccer_ball_spin',
    'terra_emerald_pool'
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/portraits/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function getEventImages() {
  const people_image_names = [
    'WP3',
    'wordstock_ursula',
    'wordstock_ursula_two',
    'wordstock_ursula_three',
    'wordstock_people',
    'woodstock_wendell',
    'wordstock_church',
    'stacey_wordstock',
    'poetry_wordstock',
    'pdx_greenpeace_protest',
    'music_wordstock',
    'crowd_wordstock',
    'aaron_scott_wordstock'
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/events/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function getLandscapeImages() {
  const people_image_names = [
    'painted_hills',
    'painted_hills_landscape',
    'new_zealand_sheep',
    'oregon_barge',
    'new_zealand_road_two',
    'nepal_clouds_two',
    'nepal_clouds',
    'monument_valley_two',
    'monument_valley',
    'monument_valley_three',
    'montana_homestead',
    'monument_valley_road',
    'hawaii_lava_one',
    'hawaii_lava_three',
    'grand_canyon',
    'grand_canyon_sunset',
    'grand_canyon_sunset_two',
    'glacier',
    'big_sur_road'
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/landscapes/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function getNatureImages() {
  const people_image_names = [
    'oregon_waterfall',
    'antelope_canyon_two',
    'antelope_canyon',
    'arches_park',
    'austin_rock',
    'baby_spiders',
    'black_swan_nz',
    'black_widow_spider',
    'condor_grand_canyon',
    'glacier_river',
    'hawaii_jungle',
    'hawaii_lava_two',
    'hawaii_lizard',
    'hawaii_sea_turtles',
    'hawaii_sunset',
    'horse_bird_hawaii',
    'mafette_rainbow',
    'mafette',
    'mangrove_tree',
    'milford_sound_boat_two',
    'milford_sound_boat',
    'new_zealand_road'
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/nature/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function getCreativeImages() {
  const people_image_names = [
    'terra_water_portrait',
    'terra_magic_eight',
    'olivia_water_portrait',
    'olivia_fire_portrait',
    'jordan_water_portrait',
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/landscapes/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function getTravelImages() {
  const people_image_names = [
    'big_temple_statues',
    'accra_chair',
    'agra_fort',
    'agra_sunset_two',
    'agra_sunset',
    'agra',
    'akhiabara',
    'ayutthaya_ruins',
    'buddha_tree',
    'chaing_mai',
    'delhi_ruins',
    'downtown_tokyo',
    'ekumfi_attakwa_bus',
    'ekumfi_attakwa_two',
    'ekumfi_attakwa',
    'haridwar_statues',
    'haridwar',
    'hase_dera',
    'hobbiton',
    'india_dollar_girl',
    'kamakura_shrine',
    'kamakura_statues',
    'kamakura',
    'kerala_church',
    'kerala_dance',
    'mussori_parade_kids',
    'mussori_parade',
    'old_delhi',
    'paris_opera',
    'queenstown_lake_three',
    'queenstown_lake_two',
    'queenstown_lake',
    'queenstown_paraglider',
    'queenstown_snow',
    'queenstown_view',
    'red_rocks_wellington',
    'reunion_house_two',
    'reunion_houses',
    'reunion_photo',
    'reunion_sunset',
    'reunion_view',
    'rivendell',
    'saint_chapelle',
    'sarnarth_buddha_ruins',
    'senso_ji',
    'south_island_river',
    'sydney_tourist',
    'tokyo_skyscraper',
    'varanasi_boats',
    'varanasi_river_ruins',
    'varanasi_street_scene',
    'wellington_cable_car',
    'yoyogi_park'
  ];
  const people_images = people_image_names.map(image => {
     return <a href={'/photography/landscapes/' + image + '.jpg'}><img className='image' alt='imagdfde' src={require(`./images/${image}.jpg`)} /></a>
  });
  return people_images;
}

function Event() {
  return <div className='routeContent'>
        <div className='imagesContainer'>
          <div>{ getEventImages() }</div>
        </div>
      </div>;
}

function Nature() {
  return <div className='routeContent'>
        <div className='imagesContainer'>
          <div>{ getNatureImages() }</div>
        </div>
      </div>;
}

function Landscape() {
  return <div className='routeContent'>
        <div className='imagesContainer'>
          <div>{ getLandscapeImages() }</div>
        </div>
      </div>;
}

function Travel() {
  return <div className='routeContent'>
        <div className='imagesContainer'>
          <div>{ getTravelImages() }</div>
        </div>
      </div>;
}

function Creative() {
  return <div className='routeContent'>
        <div className='imagesContainer'>
          <div>{ getCreativeImages() }</div>
        </div>
      </div>;
}

function Portraits() {
  return <div className='routeContent'>
      <div className='imagesContainer'>
        <div>{ getPortraitImages() }</div>
      </div>
    </div>;
}

function Experience() {
  return <div className='routeContent'>
    <div className="experienceCard">
      <div className="experienceCardHeader">
        <h2 className="position">Photo Assistant</h2>
        <div className="company">Magnum Photos</div>
        <div className="years">MAY – JUNE 2015</div>
      </div>
      <div className='experineceCardText'>
        <p>Photo Assistant for Susan Meiselas — Magnum Photos Postcards from America: Portland. I assisted Susan with her project, ‘Mary’s Girls’</p>
      </div>
    </div>
    <div className="experienceCard">
      <div className="experienceCardHeader">
        <h2 className="position">Digital Image Library Assistant — Office of Public Affairs and Communications</h2>
        <div className="company">Lewis and Clark College</div>
        <div className="years">FEB 2012 – AUGUST 2015 (3 yrs 7 mos)</div>
      </div>
      <div className='experineceCardText'>
        <ul>
          <li>Created database of over 40,000 publicity photos for Lewis & Clark College.</li>
          <li>Organized the database, edited image metadata and exported images using the Adobe Suite.</li>
          <li>Selected photos for Lewis & Clark publications and the website.</li>
          <li>Facilitated new photo shoots for the college with local photographers and businesses</li>
        </ul>
      </div>
    </div>
  </div>;
}

export default Photography;