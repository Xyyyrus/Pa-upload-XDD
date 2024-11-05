
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ProfileCard = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Profile Card */}
      <Card className="w-full bg-white rounded-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-10 w-10 bg-slate-900">
              <AvatarFallback className="text-white">JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">Manila, Philippines</p>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <button className="text-xs bg-gray-100 px-3 py-1 rounded-md">
                Edit
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">First Name</p>
                  <p className="font-medium">John</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Name</p>
                  <p className="font-medium">Doe</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">JDoe@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">01/01/2000</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium">Admin</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;