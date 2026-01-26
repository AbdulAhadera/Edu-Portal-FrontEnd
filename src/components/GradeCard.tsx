import RangeBar from "./RangeBar";


const GradeCard: React.FC = () => {

    const getInitials = (text: string) =>
        text
            .trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join("");


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-card rounded-xl shadow-sm border border-ui-border overflow-scroll">

                {/* Header */}
                <div className="bg-primary-muted py-2 px-4 border-b border-ui-border">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-text-main md:hidden">
                                {getInitials("Computer Science Algorithm")}
                            </h3>
                            <h3 className="text-xl font-bold text-text-main hidden sm:block">
                                Computer Science Algorithm
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-primary">A</p>
                            <p className="text-sm text-text-muted">Overall Grade</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-3 py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Assignments */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Assignments
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">{"Assignment 1".slice(0, 5)}...</span>
                                    <span className="font-semibold text-text-main">85/100</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Assignment 2</span>
                                    <span className="font-semibold text-text-main">90/100</span>
                                </div>
                            </div>
                        </div>

                        {/* Tests */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Tests
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 1</span>
                                    <span className="font-semibold text-text-main">18/20</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 2</span>
                                    <span className="font-semibold text-text-main">15/20</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Performance */}
                    <div className="my-4">
                        <h4 className="font-semibold text-text-main ">
                            Performance Overview
                        </h4>

                        <div className="mt-2 space-y-4">

                            {/* Assignment Avg */}
                            <div>
                                <RangeBar percent={88} text="Assignment Average" color="bg-primary" />
                            </div>

                            {/* Test Avg */}
                            <div>
                                <RangeBar percent={88} text="Test Average" color="bg-primary" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-card rounded-xl shadow-sm border border-ui-border overflow-scroll">

                {/* Header */}
                <div className="bg-primary-muted py-2 px-4 border-b border-ui-border">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-text-main md:hidden">
                                {getInitials("Computer Science Algorithm")}
                            </h3>
                            <h3 className="text-xl font-bold text-text-main hidden sm:block">
                                Computer Science Algorithm
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-primary">A</p>
                            <p className="text-sm text-text-muted">Overall Grade</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-3 py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Assignments */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Assignments
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">{"Assignment 1".slice(0, 5)}...</span>
                                    <span className="font-semibold text-text-main">85/100</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Assignment 2</span>
                                    <span className="font-semibold text-text-main">90/100</span>
                                </div>
                            </div>
                        </div>

                        {/* Tests */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Tests
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 1</span>
                                    <span className="font-semibold text-text-main">18/20</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 2</span>
                                    <span className="font-semibold text-text-main">15/20</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Performance */}
                    <div className="my-4">
                        <h4 className="font-semibold text-text-main ">
                            Performance Overview
                        </h4>

                        <div className="mt-2 space-y-4">

                            {/* Assignment Avg */}
                            <div>
                                <RangeBar percent={88} text="Assignment Average" color="bg-primary" />
                            </div>

                            {/* Test Avg */}
                            <div>
                                <RangeBar percent={88} text="Test Average" color="bg-primary" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-card rounded-xl shadow-sm border border-ui-border overflow-scroll">

                {/* Header */}
                <div className="bg-primary-muted py-2 px-4 border-b border-ui-border">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-text-main md:hidden">
                                {getInitials("Computer Science Algorithm")}
                            </h3>
                            <h3 className="text-xl font-bold text-text-main hidden sm:block">
                                Computer Science Algorithm
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-primary">A</p>
                            <p className="text-sm text-text-muted">Overall Grade</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-3 py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Assignments */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Assignments
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">{"Assignment 1".slice(0, 5)}...</span>
                                    <span className="font-semibold text-text-main">85/100</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Assignment 2</span>
                                    <span className="font-semibold text-text-main">90/100</span>
                                </div>
                            </div>
                        </div>

                        {/* Tests */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Tests
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 1</span>
                                    <span className="font-semibold text-text-main">18/20</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 2</span>
                                    <span className="font-semibold text-text-main">15/20</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Performance */}
                    <div className="my-4">
                        <h4 className="font-semibold text-text-main ">
                            Performance Overview
                        </h4>

                        <div className="mt-2 space-y-4">

                            {/* Assignment Avg */}
                            <div>
                                <RangeBar percent={88} text="Assignment Average" color="bg-primary" />
                            </div>

                            {/* Test Avg */}
                            <div>
                                <RangeBar percent={88} text="Test Average" color="bg-primary" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm border border-ui-border overflow-scroll">

                {/* Header */}
                <div className="bg-primary-muted py-2 px-4 border-b border-ui-border">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-text-main md:hidden">
                                {getInitials("Computer Science Algorithm")}
                            </h3>
                            <h3 className="text-xl font-bold text-text-main hidden sm:block">
                                Computer Science Algorithm
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-primary">A</p>
                            <p className="text-sm text-text-muted">Overall Grade</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-3 py-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Assignments */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Assignments
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">{"Assignment 1".slice(0, 5)}...</span>
                                    <span className="font-semibold text-text-main">85/100</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Assignment 2</span>
                                    <span className="font-semibold text-text-main">90/100</span>
                                </div>
                            </div>
                        </div>

                        {/* Tests */}
                        <div>
                            <h4 className="font-semibold text-text-main mb-1">
                                Tests
                            </h4>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 1</span>
                                    <span className="font-semibold text-text-main">18/20</span>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-page rounded-lg border border-ui-border">
                                    <span className="text-text-muted">Test 2</span>
                                    <span className="font-semibold text-text-main">15/20</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Performance */}
                    <div className="my-4">
                        <h4 className="font-semibold text-text-main ">
                            Performance Overview
                        </h4>

                        <div className="mt-2 space-y-4">

                            {/* Assignment Avg */}
                            <div>
                                <RangeBar percent={88} text="Assignment Average" color="bg-primary" />
                            </div>

                            {/* Test Avg */}
                            <div>
                                <RangeBar percent={88} text="Test Average" color="bg-primary" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GradeCard;