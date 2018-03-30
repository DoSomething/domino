import React from 'react';
import { map } from 'lodash';

class Row extends React.Component {
  constructor() {
    super();
  }

  getImage(northstar_id) {
    return 'images/college_logos/' + northstar_id +'.png';
  }

  getCollegeName(northstar_id) {
    const collegeNames = {
      '566ae5cf469c64a8178c2063': 'Massachusetts College of Liberal Arts',
      '5978e092a0bfad26957acacf': 'Whitman College',
      '58e70138a0bfad572a6f417c': 'Tulane University',
      '56fdbfbf469c643b4a8bc96c': 'University of Massachusetts Dartmouth',
      '57057321469c6437058b48b3': 'Saginaw Valley State University',
      '5948535fa0bfad28087e2259': 'George Fox University',
      '5762cc57469c6445558b4e62': 'Lenoir-Rhyne University',
      '55ae19f0469c640d198d9b55': 'University of California, Riverside',
      '58bf6765a0bfad53031ef8e4': 'University of Texas at El Paso',
      '56fef6a4469c64613f8d4bf2': 'Lehman College',
      '56fd73c6469c647a428b9a7e': 'North Carolina Central University',
      '5919499aa0bfad5d08445e78': 'Stanford University',
      '59381a7ba0bfad3a3677d16e': 'Southeastern University',
      '563e6d6c469c645e648b4811': 'Towson University',
      '556df166469c6430068ba299': 'Pennsylvania State University',
      '5620e94a469c643b2a8b4853': 'University of Maine at Farmington',
      '59cb016fa0bfad2b695773ce': 'Southern Illinois University',
      '55492d63469c64bf3d8b5614': 'Indiana University Bloomington',
      '581900af42a064e8668b46c4': 'University of Missouri - Kansas City',
      '5a6a5460a0bfad2f5f28758b': 'Utah State University',
      '5721308f469c6477578b478d': 'Indiana University South Bend',
      '565ba8ca469c64a8178b6c0a': 'University of Georgia',
      '587f67b7a0bfad3691209a7a': 'Manchester University',
      '5abbe55ca0bfad40e414c27a': 'Ohio University',
      '56fd38b5469c647a428b590d': 'Lindsey Wilson College',
      '5aa7400da0bfad3f0e6c3d35': 'University of Texas at Austin',
      '55a8b5d5469c64022e90807d': 'Manhattanville College',
      '58a37bcba0bfad1c2b5ae7b3': 'Iowa State University',
      '584058baa0bfad16ce2ce4b7': 'University of Illinois at Urbana-Champaign',
      '55bf5930469c64a31f955b67': 'University of California, San Diego',
      '55c2646b469c64a31f965c17': 'Roberts Wesleyan College',
      '5abd0de4a0bfad67af6f7814': 'Kendall College of Art and Design',
      '57b897ad42a064b5558b457f': 'Eastern Michigan University',
      '57d6c58442a0643d7b8b4579': 'University of Virginia',
      '59b5b6bea0bfad589c140d71': 'Winston Salem State University',
      '5a345a8aa0bfad1fd903dca5': 'Cedar Valley College',
      '57e14c2d42a064a1318b456b': 'Missouri University of Science and Technology',
      '56ff2744469c647a428d81d2': 'University of the District of Columbia',
      '58925983a0bfad05c6773403': 'University of South Carloina',
      '55c26268469c64a31f965599': 'Florida International University',
      '58c570a3a0bfad205905180c': 'Albright College',
      '5966bf21a0bfad5d167ff4c5': 'Indiana University – Purdue University Indianapolis',
      '593f2ad5a0bfad1b361565d1': 'Marshall University',
      '57bbb0fd42a0648f028b456a': 'Ivy Tech Community College',
      '56bc2c07469c6463248b4615': 'University of South Alabama',
      '5a95cafaa0bfad20e45029f2': 'Indiana State University',
      '56fe0a47469c643b4a8c1f85': 'Craven Community College',
      '56ff8022469c647a428dde98': 'Union College',
      '5a72a8cba0bfad56e310c76e': 'Concordia University Texas',
      '56fe526c469c64613f8c96fd': 'Yavapai College',
    };

    return collegeNames[northstar_id];
  }

  render() {
    const image = this.getImage(this.props.data.northstar_id);
    const rank = this.props.data.rank;
    const firstName = this.props.data.user.data.first_name;
    const collegeName = this.getCollegeName(this.props.data.northstar_id);
    const quantity = this.props.data.accepted_quantity.data.quantity;

    return (
      <tr className="table__row">
        <td className="table__cell">{rank}</td>
        <td className="table__cell logo"><img src={image}/></td>
        <td className="table__cell">{firstName}<div class="college">{collegeName}</div></td>
        <td className="table__cell">{quantity || 0}</td>
      </tr>
    );
  }
}

export default Row;
