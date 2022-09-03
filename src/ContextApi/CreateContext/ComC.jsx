import React from 'react'
import { FristName, LastName } from './ContextApp'

const ComC = () => {
	return (
		<>
			<FristName.Consumer>
				{
					(fname) => {
						return (
							<>
								<LastName.Consumer>
									{
										(lastName) => {
											return <h1> {fname} {lastName}</h1>
										}
									}
								</LastName.Consumer>
							</>
						)
					}
				}
			</FristName.Consumer>
		</>
	)
}

export default ComC