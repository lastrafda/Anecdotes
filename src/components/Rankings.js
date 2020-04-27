import React from 'react'
import { Table } from 'semantic-ui-react'

const Rankings = ({data}) => {

	let numberRank = 1
	const tableRows = data.map((item, i) => {
		const { anecdote, points } = item
		return (
			<Table.Row key={i}>
				<Table.Cell>{ numberRank++ }</Table.Cell>
				<Table.Cell>{ anecdote.substring(0,37) }...</Table.Cell>
				<Table.Cell>{ points }</Table.Cell>
			</Table.Row>
		)
		
	})


	return (<Table celled>
				<Table.Header>
					<Table.Row>
							<Table.HeaderCell>#</Table.HeaderCell>
							<Table.HeaderCell>Anecdote</Table.HeaderCell>
							<Table.HeaderCell>Points</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{ tableRows }
					</Table.Body>
				</Table>
			)
}

export default Rankings