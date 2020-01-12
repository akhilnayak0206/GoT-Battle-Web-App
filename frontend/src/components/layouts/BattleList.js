import React, { Fragment, useEffect } from 'react';
import { Card, List, Carousel, Button } from 'antd';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { OnSearch } from '../../actions/actions';

const gridStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  width: '100%',
  marginBottom: '2%',
  fontFamily: `'Courier New', Courier`
  // padding: '10px'
};

const BattleList = ({ OnSearch, search, match, history }) => {
  useEffect(() => {
    OnSearch(match.params.location);
  }, [OnSearch]);

  console.log(search);

  return (
    <Fragment>
      <section className='battleListContainer'>
        {search.length ? (
          <Card
            title={`All the battles in ${match.params.location}`}
            style={{
              backgroundColor: '#282c34',
              width: '100%'
            }}
            headStyle={{
              backgroundColor: 'white',
              fontFamily: `'Comic Sans MS', 'Comic Sans', cursive`,
              fontWeight: 'bold'
            }}
            bodyStyle={{ margin: '5%' }}
          >
            {search.length &&
              search.map(obj => (
                <Card.Grid style={gridStyle} key={obj._id}>
                  <p className='black'>{obj.name}</p>
                  <Button type='primary'>
                    <Link to={{ pathname: `/details`, state: { obj } }}>
                      Details
                    </Link>
                  </Button>
                </Card.Grid>
              ))}
          </Card>
        ) : (
          <div>
            <h1>
              <i className='fas fa-exclamation-triangle' /> Location Not Found
            </h1>
            <p className='large'>Sorry, the location does not exist</p>
            <p>
              Please go to this page <Link to='/'>Search</Link>
            </p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

BattleList.propTypes = {
  search: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default compose(
  withRouter,
  connect(mapStateToProps, { OnSearch })
)(BattleList);
