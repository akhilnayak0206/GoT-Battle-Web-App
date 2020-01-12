import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Card, List, AutoComplete, Button } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { OnList, OnAutocomplete } from '../../actions/actions';

const SearchPage = ({
  OnList,
  list,
  OnAutocomplete,
  autocomplete,
  history
}) => {
  useEffect(() => {
    OnList();
  }, [OnList]);

  const onChange = changeValue => {};

  const onSearch = searchValue => {
    if (searchValue) {
      OnAutocomplete(searchValue);
    }
  };

  const onSelect = selectValue => {
    history.push(`/battlelist/${selectValue}`);
  };

  return (
    <Fragment>
      <section className='searchPageContainer'>
        <Card style={{ width: '100%' }}>
          <AutoComplete
            dataSource={autocomplete}
            style={{ width: '100%' }}
            onSelect={onSelect}
            onSearch={onSearch}
            onChange={onChange}
            placeholder='Search location'
          />
        </Card>
        {Object.entries(list).length ? (
          <List
            size='large'
            header={<h1>Locations of all the battles:</h1>}
            bordered
            dataSource={list}
            renderItem={(data, key) => (
              <List.Item key={key}>
                <Link
                  to={{
                    pathname: `/battlelist/${data}`
                  }}
                >
                  {data}
                </Link>
              </List.Item>
            )}
          />
        ) : (
          <Button onClick={() => OnList()}>
            Click to Reload All Locations
          </Button>
        )}
      </section>
    </Fragment>
  );
};

SearchPage.propTypes = {
  list: PropTypes.array.isRequired,
  autocomplete: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // auth: state.auth,
  // profile: state.profile
  list: state.list,
  autocomplete: state.autocomplete
});

export default compose(
  withRouter,
  connect(mapStateToProps, { OnList, OnAutocomplete })
)(SearchPage);
