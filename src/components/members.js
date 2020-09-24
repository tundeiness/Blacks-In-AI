/* eslint-disable no-nested-ternary */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import image1 from '../assets/img/1.png';
import image2 from '../assets/img/2.png';
import image3 from '../assets/img/3.png';
import image4 from '../assets/img/4.png';
import image5 from '../assets/img/5.png';
import image6 from '../assets/img/6.png';
import image7 from '../assets/img/7.png';
import image8 from '../assets/img/8.png';

class Members extends React.Component {
  constructor(props) {
    super();
    this.state = {
      memberList: [
        {
          id: 1,
          name: 'Member\'s name',
          imageLink: image1,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: 'https://twitter.com/new-members',
        },
        {
          id: 2,
          name: 'Member\'s name',
          imageLink: image2,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: '',
        },
        {
          id: 3,
          name: 'Member\'s name',
          imageLink: image3,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: 'https://twitter.com/new-members',
        },
        {
          id: 4,
          name: 'Member\'s name',
          imageLink: image4,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: 'https://twitter.com/new-members',
        },
        {
          id: 5,
          name: 'Member\'s name',
          imageLink: image5,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: '',
        },
        {
          id: 6,
          name: 'Member\'s name',
          imageLink: image6,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: 'https://twitter.com/new-members',
        },
        {
          id: 7,
          name: 'Member\'s name',
          imageLink: image7,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: 'https://twitter.com/new-members',
        },
        {
          id: 8,
          name: 'Member\'s name',
          imageLink: image8,
          bio: 'A brief bio about this community ember goes here. It has been placed here solely to demonstrate the look and feel of finished text.',
          linkedIn: 'https://linkedin.com/in/femi-world ',
          twitter: '',
        },
      ],
    };
  }

  render() {
    const { memberList } = this.state;

    const listings = memberList.map(data => (

      data.twitter === ''
        ? (
          <div className="col-lg-3 single-card" key={`${data.id}`}>
            <div className="card-deck" key={`${data.id}`}>
              <div className="card">
                <img src={data.imageLink} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.bio}</p>
                </div>
                <div className="card-footer">
                  <button type="button" className="footer-button" key={`${data.id}`}>
                    <a target="_blank" rel="noreferrer" href={data.linkedIn} className="icon brands fa-linkedin">
                      <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} style={{ color: 'powder-blue' }} size="lg" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

        : data.linkedIn === ''
          ? (
            <div className="col-lg-3 single-card" key={`${data.id}`}>
              <div className="card-deck" key={`${data.id}`}>
                <div className="card">
                  <img src={data.imageLink} className="card-img-top img-fluid" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.bio}</p>
                  </div>
                  <div className="card-footer">
                    <button type="button" className="footer-button" key={`${data.id}`}>
                      <a target="_blank" rel="noreferrer" href={data.twitter} className="icon brands fa-twitter">
                        <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} style={{ color: 'pale-blue' }} size="lg" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
          : (
            <div className="col-lg-3 single-card" key={`${data.id}`}>
              <div className="card-deck" key={`${data.id}`}>
                <div className="card">
                  <img src={data.imageLink} className="card-img-top img-fluid" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.bio}</p>
                  </div>
                  <div className="card-footer">
                    <button type="button" className="footer-button" key={`${data.id}`}>
                      <a target="_blank" rel="noreferrer" href={data.linkedIn} className="icon brands fa-linkedin">
                        <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} style={{ color: 'powder-blue' }} size="lg" />
                      </a>
                    </button>
                    <button type="button" className="footer-button" key={`${data.id}`}>
                      <a target="_blank" rel="noreferrer" href={data.twitter} className="icon brands fa-twitter">
                        <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} style={{ color: 'pale-blue' }} size="lg" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )

    ));

    return (
      <div className="container-fluid mem-wrapper">
        <div className="container">
          <h3>Our Members</h3>
          <div className="row">
            {listings}
          </div>
          <div className="row d-flex justify-content-center" id="view-button">
            <a href="#" className="button-directory">View full directory</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
