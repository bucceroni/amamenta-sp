// import React, { Component } from "react";
// import PropTypes from "prop-types";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "../../actions/actions";

// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// const styles = theme => ({});

// class InstitutionDonation extends Component {
//   componentDidMount() {
//     const { actions, user } = this.props;
//     actions.getDonationUser(user.user_id);
//   }

//   render() {
//     // const { userInstitution } = this.props;

//     return (
//       <div>
//         <Typography variant="display1" gutterBottom>
//           Doações - Institutição
//         </Typography>
//         <Grid container spacing={24}>
//           {/* {userInstitution && (
//             <Grid item xs={12}>
//               <div>{JSON.stringify(userInstitution)}</div>
//             </Grid>
//           )}
//           <Button color="primary" onClick={this.handleUnselectInstitution}>
//             <span role="img" aria-label="aria-label">
//               ❌ Deletar Institutição
//             </span>
//           </Button> */}
//         </Grid>
//       </div>
//     );
//   }
// }

// InstitutionDonation.propTypes = {
//   user: PropTypes.object,
//   donationUser: PropTypes.array
// };

// const mapStateToProps = state => {
//   return {
//     user: state.login.user,
//     userInstitution: state.donationUser.donationUser
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         ...actions
//       },
//       dispatch
//     )
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(InstitutionDonation));
