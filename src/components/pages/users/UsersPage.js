import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { I18n } from 'react-redux-i18n';


let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class UsersPage extends Component {
    render() {
        return(
            <Fragment>
                <div className="page-header">
                    <div className="left">
                        <h1 className="page-title">{I18n.t('pages.users.title')}</h1>
                    </div>
                    <div className="right">
                        right
                    </div>
                </div> 
                <div className="content">
<Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell style={{ display: 'none' }} numeric>COMPANY</TableCell>
            <TableCell numeric>PLAN</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>LAST LOGIN</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell style={{ background: '#CCC' }}>{n.name}</TableCell>
                <TableCell style={{ display: 'none' }} numeric><div style={{ paddingBottom: 150, display: 'none' }}>hello</div></TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>        
</Table>                            
                </div>
            </Fragment>           
        )
    }
}

export default UsersPage;
