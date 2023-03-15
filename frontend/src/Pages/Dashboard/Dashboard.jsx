import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoalForm from "../../Components/GoalForm/goalform"
import { getGoals, reset } from "../../features/Goals/goalSlice"
import Spinner from '../../Components/Header/Spinner/Spinner'
import GoalItem from '../../Components/GoalItems/goalItem'


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { goals } = useSelector((state) => state.goal)
    const { user, isLoding, isError, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if (!user) {
            navigate('/login')
        }
        dispatch(getGoals())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])
    if (isLoding) {
        return <Spinner />
    }
    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Goals Dashboard</p>
            </section>
            <GoalForm />

            <section className="content">
                {goals.length > 0 ? (<div className="goals">
                    {goals.map((goal) => 
                        <GoalItem key={goal._id} goal={goal} />
                    )}
                </div>) : (<h3>You have not set any goals</h3>)}

            </section>
        </>
    )
}
export default Dashboard