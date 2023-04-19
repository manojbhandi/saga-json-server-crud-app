import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsersStart } from '../redux/action';
import { Link } from 'react-router-dom';

function Home() {

    const dispatch = useDispatch()
    const { users } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUsersStart())
    }, [])

    const handleDelete = () => {

    }
    return (
        <div style={{ padding: '5%' }}>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th >No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>

                {
                    users ? users?.map((item, index) => (
                        <MDBTableBody>
                            <tr>
                                <td >{index + 1}</td>
                                <td >{item?.name}</td>
                                <td >{item?.email}</td>
                                <td >{item?.phone}</td>
                                <td >{item?.address}</td>
                                <td >
                                    <MDBBtn
                                        className='m-1'
                                        tag='a'
                                        color='none'
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <MDBTooltip title='Delete' tag='a'>
                                            <MDBIcon
                                                fas
                                                icon='trash'
                                                style={{ color: 'orange' }}
                                                size='lg'
                                            />
                                        </MDBTooltip>
                                    </MDBBtn>{" "}
                                    <Link
                                        to={`/editUser/${item.id}`}
                                    >
                                        <MDBTooltip title='Edit' tag='a'>
                                            <MDBIcon
                                                fas
                                                icon='pen'
                                                style={{ color: 'primary', marginBottom: '15px' }}
                                                size='lg'
                                            />
                                        </MDBTooltip>
                                    </Link>{" "}
                                    <Link
                                        to={`/userInfo/${item.id}`}
                                    >
                                        <MDBTooltip title='View' tag='a'>
                                            <MDBIcon
                                                fas
                                                icon='eye'
                                                style={{ color: 'primary', marginBottom: '15px' }}
                                                size='lg'
                                            />
                                        </MDBTooltip>
                                    </Link>
                                </td>
                            </tr>
                        </MDBTableBody>
                    )) : null
                }

            </MDBTable>
        </div>
    )
}

export default Home