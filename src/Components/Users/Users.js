import React from 'react';

import { Button } from '@mui/material';
import { PageContainer, ItemContainer } from '../../shared/index';
class Users extends React.Component {
    render() {
        return (
            <PageContainer>
                <section>
                    <h3>Users:</h3>
                </section>
                {this.props.users
                    ? this.props.users.map((user, idx) => {
                          return (
                              <ItemContainer idx={idx}>
                                  <h4>{user.username}</h4>
                                  {/* <p>{user.profile_picture}</p> */}
                                  {/* <img src={user.profile_picture} /> */}
                                  <p>
                                      Member Since:{' '}
                                      {new Date(
                                          user.start_date
                                      ).toLocaleDateString()}
                                  </p>

                                  <p>
                                      Blocked:{' '}
                                      {user.blocked === 'No' ? 'No' : 'Yes'}
                                  </p>

                                  {user.blocked === 'No' ? (
                                      <Button
                                          onClick={() =>
                                              this.props.handleBlockUser(
                                                  user,
                                                  this.props.history
                                              )
                                          }
                                      >
                                          Block User
                                      </Button>
                                  ) : (
                                      <Button
                                          onClick={() =>
                                              this.props.handleBlockUser(
                                                  user,
                                                  this.props.history
                                              )
                                          }
                                      >
                                          Unblock User
                                      </Button>
                                  )}
                              </ItemContainer>
                          );
                      })
                    : ''}
            </PageContainer>
        );
    }
}
export default Users;
