import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, ListDiv } from '../globalStyles';
import { employeeList } from '../store/employee.slice'
import { FormColumn, FormRow, FormSection, FormTitle } from './FormStyles';
import Table from './table';

function EmployeeList() {
    const employees = useSelector(employeeList);
    useEffect(() => {
        console.log('the employee list is: ', employees);
    }, [employees]);
    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>Employee List</FormTitle>
                        <Table data={employees} />
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>

    )
}

export default EmployeeList
