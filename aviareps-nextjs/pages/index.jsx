import { userService } from 'services';
import { Link } from 'components';
import { Card } from 'components/Card';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <p className="text-center">Hi {userService.userValue?.firstName}! You can manage <Link href="/users">Users</Link> or go through AVIRESP industries.</p>
                <Card/>
            </div>
        </div>
    );
}