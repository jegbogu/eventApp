import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = () => {
    const events = getAllEvents()
   const router = useRouter()
    const findEventHandler = (year,month) =>{
        const fullpath = `/events/${year}/${month}`
        console.log(fullpath)

        router.push(fullpath)
    }
    return ( 
        <Fragment>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
     );
}
 
export default AllEventsPage;